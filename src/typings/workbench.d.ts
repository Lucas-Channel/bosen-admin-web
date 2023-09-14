/** 工作台相关模块 */
declare namespace WorkBench {
  /** 店铺信息 */
  interface MyTaskToDo {
    taskId: string;
    /** 主题 */
    title: string;
    /** 发起人 **/
    initiatorName: string;
    /** 提交时间 */
    createTime: string;
  }
  interface MyTaskToDoData {
    data: MyTaskToDo[];
  }
}
