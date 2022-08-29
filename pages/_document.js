import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang='ko'>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
export default MyDocument;

//_document.js 는 서버에서만 랜더링 되지만
//이벤트 핸들러는 작동하지 않는다.
//_document 사용하는 Head 와 _app에서 사용하는 head 는 다르다.