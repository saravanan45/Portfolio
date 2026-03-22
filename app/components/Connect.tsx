import { PROFILE } from "../common/constants";
 import {ArrowOutward}from '@mui/icons-material';
 import {ICON_MAPPING} from "../common/helper";

const Connect = () => {
  return (
    <section className="my-16 scroll-mt-20" id="connect">
      <h2 className="text-4xl font-bold my-4">Let&apos;s connect</h2>
      <p>
        I am always open to new opportunities and collaborations. Feel free to
        reach out to me through any of the following platforms:
      </p>
      <ul>
        {PROFILE.CONNECT_INFO.map((info) => (
          <li key={info.name} className="glass-card my-4 p-4">
            <a href={info.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="bg-button-secondary p-2 rounded-md">{ICON_MAPPING[info.name]}</span>
                <div className="flex flex-col justify-between items-start">
                  <span>{info.name}</span>
                  <span className="text-sm text-secondary">{info.url}</span>
                </div>
              </div>
                <ArrowOutward className="inline-block mr-2 text-gray-400" fontSize="small"/>
            </a>

          </li>
        ))}
      </ul>
    </section>
  );
};

export default Connect;
