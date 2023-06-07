export interface ISignupForm {
  name: string;
  email: string;
  phone: string;
  authNumber: string;
  pw: string;
  pwCheck: string;
}

export interface ICheckEmailForm {
  isDuplicated: boolean;
  message: string;
}

export interface ISignupProps {
  email: string;
  pw: string;
  name: string;
  memberType: string;
  phone: string;
  activated: number;
}

export interface ILoginProps {
  loginId: string;
  pw: string;
}

export interface ICheckEmailProps {
  email: string;
}
