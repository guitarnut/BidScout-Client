import React from 'react';
import {convertMilliToDateString} from "../../../common/sharedmethods";
import UIButton from "../../ui/button";

function VastRecord(props) {
  return (
    <div className={'container'}>
      <div className={'col-md-10'}>
        <h2>VAST: {props.vastRequest.vastName}</h2>
      </div>
      <div className={'col-md-2'}>
        <h2><UIButton text="Delete" action={props.delete}/></h2>
      </div>
      <div className={'col-md-12'}>
        <hr/>
      </div>
      <div className={'col-md-12'}>
        <p><strong>Request Timestamp</strong><br/>{convertMilliToDateString(props.vastRequest.requestTimestamp)}
        </p>
      </div>
      <div className={'col-md-12'}>
        <hr/>
      </div>
      <div className={'col-md-12'}>
        <p><strong>Request User Agent</strong><br/>
          <pre><code>{props.vastRequest.userAgent}</code></pre>
        </p>
      </div>
      <div className={'col-md-12'}>
        <hr/>
      </div>
      <div className={'col-md-12'}>
        <p><strong>Cookies</strong><br/>
          <pre><code>{props.vastRequest.cookies}</code></pre>
        </p>
      </div>
      <div className={'col-md-12'}>
        <hr/>
      </div>
      <div className={'col-md-4'}>
        <p><strong>Host</strong><br/>{props.vastRequest.host}</p>
      </div>
      <div className={'col-md-4'}>
        <p><strong>IP</strong><br/>{props.vastRequest.ip}</p>
      </div>
      <div className={'col-md-4'}>
        <p><strong>X-Forwarded</strong><br/>{props.vastRequest.xForwardedFor}</p>
      </div>
      <div className={'col-md-12'}>
        <hr/>
      </div>
      <div className={'col-md-12'}>
        <h4>Impressions</h4>
      </div>
      <div className={'col-md-12'}>
        <hr/>
      </div>
      <div className={'col-md-12'}>
        <h4>Events</h4>
      </div>
      {props.vastRequestEvents.map((v) => {
        return (
          <div key={v.id}>
            <div className={'col-md-12'}>
              <h4>{v.event}</h4>
              <p><strong>URL:</strong><br/>
                <pre><code>{v.url}</code></pre>
              </p>
            </div>
            <div className={'col-md-12'}>
              <p><strong>User Agent:</strong><br/>
                <pre><code>{v.userAgent}</code></pre>
              </p>
            </div>
            <div className={'col-md-3'}>
              <p><strong>Host:</strong> {v.host}</p>
            </div>
            <div className={'col-md-3'}>
              <p><strong>IP:</strong> {v.ip}</p>
            </div>
            <div className={'col-md-12'}>
              <p><strong>Timestamp:</strong> {convertMilliToDateString(v.eventTimestamp)}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default VastRecord;
