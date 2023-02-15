export class ApiRequester {
  constructor() {
    if (!process.env.REACT_APP_API_URL) {
      throw Error("Missing environment variables");
    }
  }

  async getData() {
    const response = await (
      await fetch(`${process.env.REACT_APP_API_URL}`)
    ).json();
    if (!response.ok || response.status !== 200) {
      throw Error(`Bad request/unable to connect.`);
    }
    return response;
  }
}
