export class ApiRequester {
  constructor() {
    if (!process.env.REACT_APP_API_URL) {
      throw Error("Missing environment variables");
    } else {
      console.log(process.env.REACT_APP_API_URL);
    }
  }

  async getData() {
    console.log("getData");
    const response = await fetch(`${process.env.REACT_APP_API_URL}`);
    console.log(response);
  }
}
