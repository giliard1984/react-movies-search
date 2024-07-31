import React, { useState } from "react";
import { Card, Typography, Flex, Progress, Row, Col } from "antd";
import clsx from "clsx";
import dayjs from "dayjs";

const { Meta } = Card;
const { Paragraph } = Typography;

import styles from "./MovieCard.module.scss";

interface Props {
  data: any
}

const MovieCard: React.FC<Props> = ({ data }) => {
  const [ellipsis/* , setEllipsis */ ] = useState(true);

  // TODO: Define the action when the more link is clicked
  // Perhaps open a modal and present more details
  const handleDescriptionClick = () => {
    // setEllipsis(!ellipsis);
    console.log("on click");
  };

  return (
    <Card
      hoverable
      className={styles.card}
      cover={
        <img
          alt={`image-${data.id}`}
          src={data.poster_path ? "https://image.tmdb.org/t/p/w500" + (data?.poster_path || data?.backdrop_path) : "./noimage.jpg"}
          className={styles.cardImage}
        />
      }
    >
      <Meta
        title={data.original_title}
        className={styles.cardMeta}
        description={
          <>
            <div style={{ minHeight: "35px" }}>
              <Row>
                <Col flex="auto">{data.release_date && dayjs(data.release_date, "YYYY-MM-DD").format("DD MMM YYYY")}</Col>
                <Col flex="100px">
                <Flex wrap gap="small" vertical>
                  <Progress
                    percent={Number((data.vote_average * 10).toFixed(1))}
                    percentPosition={{ align: 'center', type: 'inner' }}
                    size={[100, 20]}
                    style={{ fontSize: 11 }}
                    // strokeColor="#E6F4FF"
                    strokeColor="#001342"
                  />
                </Flex>
                </Col>
              </Row>
            </div>
            <Paragraph
              ellipsis={ellipsis ? { rows: 5, expandable: true, symbol: 'more' } : false}
              className={clsx(styles.description, { [styles.scroll]: !ellipsis })}
              onClick={() => handleDescriptionClick()}
            >
              {data.overview}
            </Paragraph>
          </>
        }
      />
    </Card>
  );
};

export default MovieCard;
