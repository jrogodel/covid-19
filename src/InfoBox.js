import React from "react";

import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total }) {
  return (
    <div>
      <Card className='info-box'>
        <CardContent>
          <Typography className='info-box__title' color='textSecondary'>
            {title}
          </Typography>

          <div className='info-box__cases'>{cases}</div>

          <Typography className='info-box__total' color='textSecondary'>
            {total}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
