import { Card } from "antd";
import Meta from "antd/es/card/Meta";

export const Devices = (props) => {
  return (
    <div id='devices' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>数字检测设备</h2>
          <p>
            基于涡流检测原理来探测钢铁棒材、板材是否存在裂纹、气孔等缺陷。
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div className='col-md-6'>
                <Card
                  hoverable
                  cover={<img alt="example" src={d.img} />}
                >
                  <Meta title={d.title} description={d.text} />
                  <br/>
                  <p>参考价格：<span style={{'color': 'red'}}>{d.price}元</span></p>

                </Card>
              </div>

            ))
            : 'Loading...'}
      </div>
    </div>
    </div >
  )
}
