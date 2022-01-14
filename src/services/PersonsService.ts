import { ax } from "../axios";

class PersonsService {
  GetStore(params: string): Promise<any> {
    return ax.get(`/api${params}`);
  }
}

export default new PersonsService();
