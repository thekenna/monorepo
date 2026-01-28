export namespace UserErrors {
  export class AlreadyExists extends Error {
    constructor(email: string) {
      super();
    }
  }
}
