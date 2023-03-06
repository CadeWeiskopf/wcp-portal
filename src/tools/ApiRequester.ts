export class ApiRequester {
  constructor() {
    if (!process.env.REACT_APP_API_URL || !process.env.REACT_APP_API_URL) {
      throw Error("Missing environment variables");
    }
  }

  async postData(data: any) {
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

  async isPaid(soId: number, soGuid: string) {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}&soId=${soId}&soGuid=${soGuid}`
    );
    if (!response.ok || response.status !== 200) {
      throw Error(`Bad request/connection.`);
    }
    const data = await response.json();
    return data;
  }
}
