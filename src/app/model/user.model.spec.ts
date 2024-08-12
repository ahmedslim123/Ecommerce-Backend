// src/app/models/users.model.spec.ts
import { User } from './user.model';

describe('Users', () => {
  it('should create an instance', () => {
    const user = new User(1, 'John', 'Doe', 'john@example.com', 'password123', '123 Main St', 'California', 'Los Angeles', '9000');
    expect(user).toBeTruthy();
  });
});
export { User };

