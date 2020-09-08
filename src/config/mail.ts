interface IMailConfig {
  driver: 'production' | 'development',

  defaults: {
    from: {
      email: string;
      name: string;
    }
  }
}

export default {
  driver: 'development',

  defaults: {
    from: {
      email: 'research@polijunior.com.br',
      name: 'Equipe de Research',
    },
  },
} as IMailConfig;
