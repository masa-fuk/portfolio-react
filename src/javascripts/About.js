import React from 'react';
import '../css/RightContent.css';

class About extends React.Component {
  componentDidMount() {
    this.props.contentname('About');
  }

  render() {
    return(
      <div className="RightContent">
        <div className='Content'>
          <h2>Okazaki Masahiro</h2>
          <p>
            九州の大学で情報系について学んでいる大学4年生。
            専攻はネットワークであり、インターネットプロトコルの評価などの研究を行っている。
          </p>
          <p>
            技術の面から課題や面倒事を解決するような製品、サービスに興味がある。
            特に最近は、フィンテックの分野に興味を抱いている。
          </p>
          <h2>保有資格</h2>
          <ul>
            <li>ITパスポート</li>
            <li>基本情報技術者試験</li>
            <li>応用情報技術者試験</li>
            <li>情報セキュリティスペシャリスト試験</li>
            <li>日商簿記3級</li>
            <li>日商簿記2級</li>
            <li>全商簿記1級</li>
          </ul>
        </div>
      </div>
    )};
}

export default About;