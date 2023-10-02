import { makeAutoObservable } from "mobx";
import { addRecordApi, getRecordsApi } from "api";

class Math {
  records = [];

  constructor() {
    makeAutoObservable(this);
  }

  addRecord = async (record) => {
    await addRecordApi(record);
    let tmpRecs = { ...this.records };
    tmpRecs[record.level] = record.score;
    this.records = tmpRecs;
  };
  getRecords = async () => {
    this.records = await getRecordsApi();
  };
}

export const mathStore = new Math();
