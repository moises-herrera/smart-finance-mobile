import { StandardResponse } from './standard-response.interface';

/**
 * Error response data.
 */
export interface ErrorResponse extends StandardResponse {
  message: string;
}
