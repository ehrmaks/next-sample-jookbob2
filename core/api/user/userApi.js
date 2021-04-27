import { localClient } from '@/core/config'

/*
 * 로그인
 * @param loginInfo(email, passwd)
 */
export function userLogin(loginInfo) {
	return localClient.post('/user/login', loginInfo)
}

/*
 * 로그아웃
 * @param id
 */
export function userLogout(id) {
	return localClient.post(`/user/logout/${id}`)
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
export function userJoin(userInfo) {
	return localClient.post(`/user`, userInfo)
}

/*
 * 이메일 중복 체크
 * @param email
 */
export function userDupCheck(email) {
	return localClient.get(`/user/duplicate/${email}`)
}
