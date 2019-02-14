import React from 'react';
import {Panel} from 'react-bootstrap';
import {convertMilliToDateString} from "../../../common/sharedmethods";
import UIButton from "../../ui/button";
import BidderLimit from "../components/bidderlimit";

function AuctionRecordList(props) {
  return (
    <div>
      {Object.keys(props.bids).length > 0 ?
        (
          <div className={'container'}>
            <div className={'col-md-10'}>
              <h2>Auction Records</h2>
            </div>
            <div className={'col-md-2'}>
              <h2><UIButton text="Delete all" action={props.delete}/></h2>
            </div>
            <BidderLimit
              records={props.status.auctionRecords}
              recordmax={props.status.auctionRecordsLimit}
              requests={props.status.bidRequests}
              requestsmax={props.status.bidRequestsLimit}
              resetdate={convertMilliToDateString(props.status.periodEnd)}
            />
            {Object.keys(props.bids).map((v) => {
              return (
                <div key={v} className={'col-md-4'}>
                  <Panel>
                    <Panel.Body>
                      <p><a href={'/auction/' + v}>{props.bids[v].bidRequestId}</a><br/>
                        {convertMilliToDateString(props.bids[v].requestTimestamp)}
                      </p>
                    </Panel.Body>
                  </Panel>
                </div>
              )
            })}
          </div>
        ) : (
          <div className={'container'}>
            <div className={'col-md-12'}>
              <h2>Auction Records</h2>
              <p>No auction records available.</p>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default AuctionRecordList;
