import QuickSort from './QuickSort';
import { SortTester } from '../SortTester';

describe('QuickSort', () => {
  it('should sort array', () => {
    SortTester.testSort(QuickSort);
  });
});
