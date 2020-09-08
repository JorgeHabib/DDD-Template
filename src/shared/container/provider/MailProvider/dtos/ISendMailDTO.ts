interface IMailContact {
  name: string;
  email: string;
}

interface ISendMailDTO {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  emailData: string;
}

export default ISendMailDTO;
