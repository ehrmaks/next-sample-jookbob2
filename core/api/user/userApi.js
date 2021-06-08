import { authClient, noneAuthClient } from '@/core/config/axios'

/*
 * 로그인
 * @param loginInfo(email, passwd)
 */
export async function postUserLogin(loginInfo) {
	const response = await noneAuthClient.post('/user/login', loginInfo)
	return response.data.data
}

/*
 * 로그아웃
 * @param id
 */
export async function postUserLogout(id) {
	const response = await authClient.post(`/user/logout/${id}`)
	return response.data.data
}

/* 
 * 회원가입
 * @param userInfo(    
 * 	private String id;
    private String email;
    private String passwd;
    private String name;
    private String country;
    private String regType;
    private String picnuFlag;
    private String subscribeFlag;
    private String verifyFlag;
    private String blockFlag;
    private String dormantFlag;
    private String delFlag;
    private String validityPeriod;
    private String regDate;
    private String outDate;
    private String phone;)
*/
export async function postUserJoin(userInfo) {
	const response = await noneAuthClient.post(`/user`, userInfo)
	return response.data.data
}

/*
 * 이메일 중복 체크
 * @param email
 */
export async function getUserDupCheck(email) {
	const response = await noneAuthClient.get(`/user/duplicate/${email}`)
	return response.data.data
}
