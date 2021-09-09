export default function TypescriptPage() {
    //문자타입 타입추론
    let aaa = "안녕하세요"
    // aaa = 3

    //문자타입
    let bbb: String;
    bbb = "반갑습니다"
    // bbb = 123

    //숫자타입
    let ccc: number = 5
    // ccc = "333"

    //배열타입
    let ddd: number[] = [1, 2, 3, 4, 5, 6]
    let eee: (number | string)[] = ["1", 2, 3, 4, 5, 6] //타입스크립트는 또는 | 하나만쓴다

    let fff: (number[] | string[]) = [1, 2, 3, 4, 5, 6] //넘버만들어가있는배열 스트링만들어가있는배열 둘중 하나만 가능하다


    //객체타입
    interface IProfile {
        school: string
        age: number
    }

    let profile: IProfile = {
        school: '다람쥐 초등학교',
        age: 13
    }
    // profile.age = "bbb"

    return <div>타입스크립트 페이지입니다.</div>

    
}