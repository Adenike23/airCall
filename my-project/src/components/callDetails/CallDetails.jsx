import React, { useEffect, useState } from "react";
import { BiSolidMessage } from "react-icons/bi";
import {
  BsTelephoneInbound,
  BsFillTelephoneOutboundFill,
  BsArchiveFill,
} from "react-icons/bs";
import { MdMarkEmailUnread, MdArrowBack } from "react-icons/md";
import { BiSolidPhone } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";

const CallDetails = () => {
  const baseURL = "https://cerulean-marlin-wig.cyclic.app/";
  const navigate = useNavigate()
  const [oneCall, setOneCall] = useState([]);
  const { id } = useParams();
  

  const getOneCall = async () => {
    // setLoading(true)
    const response = await fetch(`${baseURL}/activities/${id}`);
    console.log(response);
    const data = await response.json();
    if (response.ok) {
      setOneCall(data);
    }
    //   if(response) setLoading(false)
    // console.log(data);
  };
  useEffect(() => {
    getOneCall();
  }, []);
  return (
    <>
    <button onClick={() => navigate('/')} className="flex gap-1 items-center m-3 hover:text-slate-500 active:scale-75"><span><MdArrowBack/></span> Back</button>
      {oneCall && (
        <div className="mt-2 ">
          <p className="p-3 font-semibold flex justify-center items-center">
            M
          </p>
          <p className="font-bold flex justify-center items-center">
            {oneCall.from}
          </p>
          <div className="flex gap-5 justify-center items-center">
            <span title="message" className="text-xl rounded-tl-lg border p-2">
              <BiSolidMessage />
            </span>
            <span title="call" className="text-xl rounded-tl-lg border p-2">
              <BiSolidPhone />
            </span>
            <span title="mail" className="text-xl rounded-tl-lg border p-2">
              <MdMarkEmailUnread />
            </span>
            <span title="archive" className="text-xl rounded-tl-lg border p-2">
              <BsArchiveFill />
            </span>
          </div>
          <div className="flex justify-between m-2 p-2 rounded-lg border">
            <div>
              <p>{oneCall.created_at && oneCall.created_at.substr(0, 10)}</p>
              <p>
                {oneCall.call_type &&
                  oneCall.call_type.charAt(0).toUpperCase() +
                    oneCall.call_type.slice(1)}
              </p>
            </div>
            <div className="flex items-center gap-3">
              {oneCall.direction === "inbound" ? (
                <BsTelephoneInbound />
              ) : (
                <BsFillTelephoneOutboundFill />
              )}
              <p className="">
                {oneCall.direction &&
                  oneCall.direction.charAt(0).toUpperCase() +
                    oneCall.direction.slice(1)}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center m-2 p-2 rounded-lg border">
            <div>
              <p>phone</p>
              <p
                className={
                  oneCall.call_type === "answered"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {oneCall.via}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-400">
                {oneCall.duration > 0 ? oneCall.duration + " minutes" : ""}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CallDetails;
