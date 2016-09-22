/**
 * Created with JetBrains WebStorm.
 * Author: songxg
 * Date: 16/9/19
 * Time: 下午3:38
 */
const React = require('react');
const ReactDom = require('react-dom');
import Popup from 'popup-v7';
import '../assets/sample.less';

class Demo extends React.Component{
    render() {
        const anchorTR = (
            <div className='anchor tl'>右上角弹出</div>
        ),
        anchorTC = (
            <div className='anchor tc'>中上弹出</div>
        ),
        anchorTL = (
            <div className='anchor tr'>左上角弹出</div>
        ),
        anchorCL = (
            <div className='anchor cl'>左中侧弹出</div>
        ),
        anchorCC = (
            <div className='anchor cc'>正中弹出</div>
        ),
        anchorCR = (
            <div className='anchor cr'>右中侧弹出</div>
        ),
        anchorBR = (
            <div className='anchor tl'>右下角弹出</div>
        ),
        anchorBC = (
            <div className='anchor tc'>中下弹出</div>
        ),
        anchorBL = (
            <div className='anchor tr'>左下角弹出</div>
        );
        return (
            <div className='example-container'>
                <div ref='area' className='test-area'>
                    <div style={ { marginLeft: 150, marginTop: 80 } }>
                        <Popup anchor={ anchorTR } placement='tr'>
                            <div>hello popup!</div>
                        </Popup>
                        <Popup anchor={ anchorTC } placement='tc'>
                            <div>hello popup!</div>
                        </Popup>
                        <Popup anchor={ anchorTL } placement='tl'>
                            <div>hello popup!</div>
                        </Popup>
                    </div>
                    <div style={ { marginLeft: 150, marginTop: 50 } }>
                        <Popup anchor={ anchorCL } placement='cl'>
                            <div>hello popup!</div>
                        </Popup>
                        <Popup anchor={ anchorCC } placement='cc'>
                            <div>hello popup!</div>
                        </Popup>
                        <Popup anchor={ anchorCR } placement='cr'>
                            <div>hello popup!</div>
                        </Popup>
                    </div>
                    <div style={ { marginLeft: 150, marginTop: 50 } }>
                        <Popup anchor={ anchorBR } placement='br'>
                            <div>hello popup!</div>
                        </Popup>
                        <Popup anchor={ anchorBC } placement='bc'>
                            <div>hello popup!</div>
                        </Popup>
                        <Popup anchor={ anchorBL } placement='bl'>
                            <div>hello popup!</div>
                        </Popup>
                    </div>
                </div>
            </div>
        );
    }
};

ReactDom.render(
    <Demo />,
    document.getElementById('__react-content')
);
