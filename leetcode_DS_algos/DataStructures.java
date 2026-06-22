package leetcode_DS_algos;

import java.util.HashMap;

public class DataStructures{
    public boolean containsDuplicate(int[] nums) {
		HashMap<Integer, Boolean> hashMap = new HashMap<Integer, Boolean>();
		for(int num : nums) {
			if(hashMap.containsKey(num)) {
				System.out.println(num);
				return true;
			}
			else {
				hashMap.put(num, true);
			}
		}
		return false;
    }
    
    public int maxSubArray(int[] nums) {
        int max = Integer.MIN_VALUE;
        int sum=0;
        for(int i=0; i<nums.length; i++){
            sum+=nums[i];
            max = Math.max(max, sum);
            if(sum<0) sum = 0;
        }
        return max;
    }
}