import React from 'react';
import {Panel} from 'react-bootstrap';
import {convertMilliToDateString} from "../../../common/sharedmethods";
import UIButton from "../../ui/button";
import BidderLimit from "../components/bidderlimit";

function VastRecordList(props) {
  return (
    <div>
      {Object.keys(props.vastTransactions).length > 0 ?
        (
          <div className={'container'}>
            <div className={'col-md-10'}>
              <h2>VAST Tag Records</h2>
            </div>
            <div className={'col-md-2'}>
              <h2><UIButton text="Delete all" action={props.delete}/></h2>
            </div>

            <BidderLimit
              records={props.status.vastRecords}
              recordmax={props.status.vastRecordsLimit}
              requests={props.status.vastTagRequests}
              requestsmax={props.status.vastTagRequestsLimit}
              resetdate={convertMilliToDateString(props.status.periodEnd)}
            />

            {Object.keys(props.vastTransactions).map((v) => {
              return (
                <div key={v} className={'col-md-4'}>
                  <Panel>
                    <Panel.Body>
                      <p><a href={'/vast/' + v}>{props.vastTransactions[v].vastName}</a><br/>
                        {convertMilliToDateString(props.vastTransactions[v].requestTimestamp)}
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
              <h2>VAST Tag Records</h2>
              <p>No VAST tag records available.</p>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default VastRecordList;
