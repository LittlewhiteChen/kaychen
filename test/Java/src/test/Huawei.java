package test;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Huawei {

	public static void main(String[] args) {
		
//		ͳ���ַ��������ֳ��ֵĴ�������������ͳ�Ƴ���
//		���������룺323324423343�����3,6
		
		Scanner str = new Scanner(System.in);
		System.out.println(count(str.nextLine()));

	}
	
	/**
	 * ͳ���ַ��������ֳ��ֵĴ�������������ͳ�Ƴ���
	 * ���������룺323324423343�����3,6
	 * @param str ������ַ���
	 * @return
	 */
	public static String count(String str) {
		
		String[] arr = str.split("");//ת��Ϊ����
		
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
