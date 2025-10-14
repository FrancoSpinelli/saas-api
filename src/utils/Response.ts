export class Res<T> {
  public count?: number;
  constructor(
    public data: undefined | T | T[],
    public message: string,
    public success: boolean = true
  ) {
    if (!data) {
      delete this.data;
    }
    this.message = message;
    this.success = success;

    if (Array.isArray(data)) {
      this.count = data.length;
    }
  }
}
