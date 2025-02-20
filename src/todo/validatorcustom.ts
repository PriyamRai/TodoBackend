import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
  } from 'class-validator';
  
  @ValidatorConstraint({ name: 'isStrongPassword', async: false })
  export class IsStrongPasswordConstraint implements ValidatorConstraintInterface {
    validate(password: string, args: ValidationArguments) {
      const { minLength } = args.constraints[0]; // Retrieve minLength from constraints
  
      return (
        /[A-Z]/.test(password) && // At least one uppercase letter
        /[0-9]/.test(password) && // At least one number
        password.length >= minLength // Minimum length check
      );
    }
  
    defaultMessage(args: ValidationArguments) {
      const { minLength } = args.constraints[0];
      return `Password must be at least ${minLength} characters long, contain at least one uppercase letter, and one number.`;
    }
  }
  