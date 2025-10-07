export class SuccessResponse<T> {
  public count?: number;
  constructor(
    public data: T | T[],
    public message: string,
    public success: boolean = true
  ) {
    this.data = data;
    this.message = message;
    this.success = success;

    if (Array.isArray(data)) {
      this.count = data.length;
    }
  }
}
