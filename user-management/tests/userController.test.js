import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { register, login, getProfile } from '../src/controllers/userController.js';
import User from '../src/models/userModel.js';
import { jest } from '@jest/globals';

jest.mock('../src/models/userModel.js');

describe('User Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('register', () => {
    it('should register a new user', async () => {
      const req = {
        body: {
          username: 'testuser',
          email: 'test@example.com',
          password: 'password123'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      User.findOne = jest.fn().mockResolvedValue(null);
      User.prototype.save = jest.fn().mockResolvedValue(req.body);

      await register(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ message: 'User registered successfully' }));
    });

    it('should not register an existing user', async () => {
      const req = {
        body: {
          username: 'testuser',
          email: 'test@example.com',
          password: 'password123'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      User.findOne = jest.fn().mockResolvedValue(req.body);

      await register(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ message: 'User with this email already exists' }));
    });
  });

  describe('login', () => {
    it('should log in a user with valid credentials', async () => {
      const req = {
        body: {
          email: 'test@example.com',
          password: 'password123'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      const user = {
        _id: new mongoose.Types.ObjectId(),
        email: 'test@example.com',
        password: 'password123',
        checkPassword: jest.fn().mockResolvedValue(true),
        role: 'user'
      };

      User.findOne = jest.fn().mockResolvedValue(user);
      jest.spyOn(jwt, 'sign').mockReturnValue('fakeToken');

      await login(req, res);

      expect(res.status).toHaveBeenCalledWith(200); // Ensure this line is present in login function
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ token: 'fakeToken' })); // Ensure this line is present in login function
    });

    it('should not log in a user with invalid credentials', async () => {
      const req = {
        body: {
          email: 'test@example.com',
          password: 'wrongpassword'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      const user = {
        _id: new mongoose.Types.ObjectId(),
        email: 'test@example.com',
        password: 'password123',
        checkPassword: jest.fn().mockResolvedValue(false),
        role: 'user'
      };

      User.findOne = jest.fn().mockResolvedValue(user);

      await login(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ message: 'Invalid credentials' }));
    });
  });

  describe('getProfile', () => {
    it('should return user profile', async () => {
      const req = {
        user: {
          userId: new mongoose.Types.ObjectId().toString()
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      const user = {
        _id: req.user.userId,
        username: 'testuser',
        email: 'test@example.com'
      };

      User.findById = jest.fn().mockReturnValue({
        select: jest.fn().mockResolvedValue(user)
      });

      await getProfile(req, res);

      expect(res.status).toHaveBeenCalledWith(200); // Ensure this line is present in getProfile function
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ username: 'testuser', email: 'test@example.com' })); // Ensure this line is present in getProfile function
    });

    it('should return 404 if user is not found', async () => {
      const req = {
        user: {
          userId: new mongoose.Types.ObjectId().toString()
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      User.findById = jest.fn().mockReturnValue({
        select: jest.fn().mockResolvedValue(null)
      });

      await getProfile(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ message: 'User not found' }));
    });
  });
});
