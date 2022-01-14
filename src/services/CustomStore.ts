import { id, IPerson } from "@/Models/Person";
import CustomStore from "devextreme/data/custom_store";
import PersonsService from "./PersonsService";

const isNotEmpty = (value: any) =>
  value !== undefined && value !== null && value !== "";

const customDataSource = new CustomStore<IPerson, number>({
  key: id,
  load: (loadOptions: any) => {
    let params = "?";
    [
      "filter",
      "group",
      "groupSummary",
      "parentIds",
      "requireGroupCount",
      "requireTotalCount",
      "searchExpr",
      "searchOperation",
      "searchValue",
      "select",
      "sort",
      "skip",
      "take",
      "totalSummary",
      "userData",
    ].forEach(function (i: string) {
      if (i in loadOptions && isNotEmpty(loadOptions[i])) {
        params += `${i}=${JSON.stringify(loadOptions[i])}&`;
      }
    });
    params = params.slice(0, -1);

    return PersonsService.GetStore(params)
      .then(({ data }) => {
        return {
          data: data.data,
          totalCount: data.totalCount,
          summary: data.summary,
          groupCount: data.groupCount,
        };
      })
      .catch(() => {
        throw "Error";
      });
  },
});
export { customDataSource };
