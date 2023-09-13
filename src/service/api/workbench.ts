import { request } from '../request';

/**
 * 查询所有上架的店铺
 * @param title - 标题
 * @param initiatorName - 发起人
 * @returns - 返回data
 */
export function queryMyTaskToDo(title: string, initiatorName: string) {
  return request.get<WorkBench.MyTaskToDo>(
    `/bosen-workflow/work/flow/processes/query/queryMyTasksToDo?title=${title}&initiatorName=${initiatorName}`
  );
}
