<template>
  <div>
    <DxDataGrid
      id="gridContainer"
      :data-source="dataSource"
      :show-borders="true"
      :allowColumnResizing="true"
      :columnAutoWidth="true"
      noDataText="Нет данных для отображения"
      :showRowLines="true"
      :rowAlternationEnabled="true"
    >
      <DxRemoteOperations
        :groupPaging="true"
        :filtering="true"
        :grouping="true"
        :paging="true"
        :sorting="true"
        :summary="true"
      />
      <DxFilterRow visible="true" />
      <DxHeaderFilter visible="true" />
      <DxSearchPanel visible="true" :width="300" />
      <DxColumn :data-field="id" caption="Id" alignment="right" />
      <DxColumn :data-field="firstName" caption="Имя" />
      <DxColumn :data-field="lastName" caption="Фамилия" />
      <DxColumn
        :data-field="dateOfBirth"
        alignment="right"
        data-type="date"
        format="dd.MM.yyyy"
        caption="Дата рождения"
      />
      <DxColumn :data-field="height" alignment="right" caption="Рост" />
      <DxPager
        :show-navigation-buttons="true"
        :showInfo="true"
        infoText="Страница {0} из {1} (Всего: {2})"
      />
      <DxPaging :page-size="20" />
      <DxSorting mode="multiple" />
    </DxDataGrid>
  </div>
</template>
<script lang="ts">
import {
  DxDataGrid,
  DxColumn,
  DxHeaderFilter,
  DxSearchPanel,
  DxFilterRow,
  DxPaging,
  DxPager,
  DxRemoteOperations,
  DxSorting,
} from "devextreme-vue/data-grid";
import { customDataSource } from "@/services/CustomStore";
import { id, firstName, lastName, dateOfBirth, height } from "../Models/Person";
import { defineComponent } from "@vue/runtime-core";
import { locale, loadMessages } from "devextreme/localization";
import ruMessages from "devextreme/localization/messages/ru.json";

export default defineComponent({
  components: {
    DxDataGrid,
    DxColumn,
    DxHeaderFilter,
    DxSearchPanel,
    DxFilterRow,
    DxPaging,
    DxPager,
    DxRemoteOperations,
    DxSorting,
  },
  setup(props: any) {
    loadMessages(ruMessages);
    locale(navigator.language);
    return {
      dataSource: customDataSource,
      id,
      firstName,
      lastName,
      dateOfBirth,
      height,
    };
  },
});
</script>
<style scoped>
#gridContainer {
  height: 90vh;
}

.options {
  padding: 20px;
  margin-top: 20px;
  background-color: rgba(191, 191, 191, 0.15);
}

.caption {
  font-size: 18px;
  font-weight: 500;
}

.option {
  margin-top: 10px;
}

.option > span {
  margin-right: 10px;
}

.option > .dx-selectbox {
  display: inline-block;
  vertical-align: middle;
}
</style>
