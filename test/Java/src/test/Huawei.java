package test;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Huawei {

	public static void main(String[] args) {
		
//		统计字符串中数字出现的次数，最大次数的统计出来
//		举例：输入：323324423343输出：3,6
		
		Scanner str = new Scanner(System.in);
		System.out.println(count(str.nextLine()));

	}
	
	/**
	 * 统计字符串中数字出现的次数，最大次数的统计出来
	 * 举例：输入：323324423343输出：3,6
	 * @param str 输入的字符串
	 * @return
	 */
	public static String count(String str) {
		
		String[] arr = str.split("");//转化为数组
		
		Map<String, Integer> m = new HashMap<String, Integer>();
		
		for (int i = 0; i < arr.length; i++) {
			if (m.containsKey(arr[i])) {
				int counter = (int)m.get(arr[i]);
				m.put(arr[i],counter+1);
			} else {
				m.put(arr[i],1);
			}
		}
		
		int tempCounter = 0;
		String tempKey = "";
		for (String key : m.keySet()) {
			if(m.get(key)>tempCounter){
				tempCounter = m.get(key);
				tempKey = key;
			}
			
		}
//		System.out.println(tempKey+"----"+tempCounter);
		return tempKey+","+tempCounter;
	}

}
