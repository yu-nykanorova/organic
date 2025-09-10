import { TeamTeam } from "./team";
import { CommonBanner } from "../../shared/banner";
import TeamBanner from "../../assets/img/banners/team-bg.jpg";
import { Newsletter } from "../../shared/newsletter";

export const TeamPage = () => {
  return (
    <div className="team_page">
        <CommonBanner imgSrc={TeamBanner} altText={'TeamBanner'}/>
        <TeamTeam/>
        <Newsletter />
    </div>
  )
}
