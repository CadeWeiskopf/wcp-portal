export class ApiRequester {
  constructor() {
    if (!process.env.REACT_APP_API_URL) {
      throw Error("Missing environment variables");
    }
  }

  async postData(data: any) {
    console.log(`postData`, data);
    console.log(`postData`, process.env.REACT_APP_API_URL);
    const response = await (
      await fetch(`${process.env.REACT_APP_API_URL}`, {
        method: "POST",
        body: JSON.stringify(data),
      })
    ).json();
    if (!response.ok) {
      throw Error(`Bad request/unable to connect. ${JSON.stringify(response)}`);
    }
    return response;
  }
}
