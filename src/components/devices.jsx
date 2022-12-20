import { Card } from "antd";
import Meta from "antd/es/card/Meta";

export const Devices = (props) => {
  return (
    <div id="devices" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>智能数字检测</h2>
          <p>
            致力于将领先的AI技术、机器视觉及自动化能力赋能智能制造，解决富有挑战性的工业质检难题，为制造业智能化、数字化转型升级提供助力。
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div className="col-md-6">
                  <Card hoverable cover={<img alt="example" src={d.img} />}>
                    <Meta title={d.title} description={d.text} />
                    <br />
                    <p>
                      参考价格：
                      <span style={{ color: "red" }}>{d.price}元</span>
                    </p>
                  </Card>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
