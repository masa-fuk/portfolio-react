import React from 'react';
import '../css/RightContent.css';

class Prize extends React.Component {
  componentDidMount() {
    this.props.contentName('Prize');
  }

  render() {
    return (
      <div className='RightContent'>
        <div className='Content'>
          <div>
            <h2>OJT Manager</h2>
            <p>
              e-zukaスマートフォンアプリコンテストで企業賞を受賞。
            </p>
            <p>
              企業の研修の際に必ず行われる、OJT(On the Job Training)に着目し，進捗状況の確認や仕事の内容の確認などをワンストップで行うことができるようにしたもの。
              連絡ミスによる作業の重複や手戻りなどを削減し，仕事効率化を目指したWEBアプリである。
            </p>
          </div>
          <div>
            <h2>ケシモン</h2>
            <p>
              HACK U 2019 福岡大会で優秀賞を受賞。
            </p>
            <p>
              子どものころに一度は流行った懐かしの消しゴムバトルに、AR技術を駆使して現代の遊びに昇華させたゲーム。
              通常の消しゴムバトルとしての要素に加え，AR空間上でもオリジナルキャラクターが戦うという要素が追加されている．
            </p>
          </div>
        </div>
      </div>
    )
  };
}

export default Prize;