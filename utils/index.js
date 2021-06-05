export const utils = {
	regEx: {
		email: param => {
			return /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(param)
		},
		image: param => {
			return /\.(png|jpe?g|gif)(\?.*)?$/.test(param)
		},
		number: param => {
			return /[0-9]/g.test(param)
		},
		password: param => {
			// 대/소문자 상관없이 8~20자까지 기호를 포함
			return /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/.test(param)
		},
		phoneNo: param => {
			// 지역번호, 서울번호, 핸드폰번호
			return /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/.test(param)
		},
	},
	stringCount: {
		/**
		 * 글자 수 제어
		 * 영문 1byte, 한글 3byte 인식
		 * params : str(문자열)
		 * return : byte(byte count)
		 * */
		threeByteCount: str => {
			return str
				.split('')
				.map(s => s.charCodeAt(0))
				.reduce((prev, c) => prev + (c === 10 ? 3 : c >> 7 ? 3 : 1), 0)
		},
		/**
		 * 글자 수 제어
		 * 영문 1byte, 한글 2byte 인식
		 * params : str(문자열)
		 * return : byte(byte count)
		 * */
		twoByteCount: str => {
			return str
				.split('')
				.map(s => s.charCodeAt(0))
				.reduce((prev, c) => prev + (c === 10 ? 2 : c >> 7 ? 2 : 1), 0)
		},
	},
	autoHypen: {
		/**
		 * 전화번호 자동 하이픈
		 * params : phoneNo(string)
		 * return : string
		 * */
		phone: phoneNo => {
			if (phoneNo && phoneNo.length > 9) {
				return phoneNo
					.replace(/[^0-9]/g, '')
					.replace(utils.regEx, '$1-$2-$3')
					.replace('--', '-')
			}
			return phoneNo
		},
	},
	format: {
		/**
		 * 카드번호 포멧
		 * params : cardNo1(string), cardNo2(string)
		 * return : string
		 * */
		card: (cardNo1, cardNo2) => {
			if (cardNo1 && cardNo2) {
				let format1 = ''
				let format2 = ''
				let cardEnd = ''

				const cardEndCnt = cardNo2.substring(4, cardNo2.length).length

				for (let i = 0; i < cardEndCnt; i++) {
					cardEnd += '*'
				}

				format1 = `${cardNo1.substring(0, 4)}-${cardNo1.substring(4, 8)}`
				format2 = `****-${cardEnd}`

				return `${format1}-${format2}`
			}

			return ''
		},
	},
}
