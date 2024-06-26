/**
 * Interface for the OTP state.
 */
export interface OTPState {
  /** The verification key. */
  verificationKey: string;

  /** The OTP to verify. */
  otp: string;

  /** The email to verify. */
  email: string;

  /** The temporal token. */
  token: string | null;

  /** Loading status. */
  isLoading: boolean;

  /** Error message. */
  errorMessage?: string;
}
