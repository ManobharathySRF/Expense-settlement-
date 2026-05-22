import { expenseSettlementTestCases } from './test-cases.data';
import { ExpenseSettlementTestCase } from './test-case';

export const getAllTestCases = (): ExpenseSettlementTestCase[] =>
  [...expenseSettlementTestCases].sort((a, b) => a.id - b.id);

export const getTestCasesByModule = (moduleName: string): ExpenseSettlementTestCase[] =>
  getAllTestCases().filter((testCase) => testCase.moduleName === moduleName);
