import React from "react";
import { Root, HeaderContainer, TagContainer, DetailsContainer, Tag } from "./style";
import GirlUser from "../../images/girl-user.jpeg";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    size: {
        width: "48px",
        height: "48px",
    },
});

const ModalDescription = ({currentEntity, currentEntityHover, setCurrentEntity}) => {
    const classes = useStyles();

    return (
        <Root isDisplayed={currentEntityHover || currentEntity}>
            <div className="wrapperModalDescription">
                <HeaderContainer>
                    <Avatar src={GirlUser} classes={{ root: classes.size}}></Avatar>
                    <div>
                        <h4>Nom du commerce</h4>
                        <p>
                            <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.47447 0.0112986C4.35668 -0.0763721 3.40399 0.354591 3.34509 1.01111C3.33397 1.15118 3.36138 1.29163 3.42423 1.41664C3.47279 1.51495 3.53549 1.60529 3.61026 1.68463C3.61353 1.68426 3.61724 1.68363 3.62049 1.68327C5.10569 1.51851 7.04645 1.73195 8.49268 2.34287C8.48923 2.3458 6.3882 1.90561 4.41209 2.06485C4.35099 2.07022 2.71849 2.20491 1.65742 2.79963L1.8247 3.39682C2.27285 3.1173 2.75876 2.90645 3.26688 2.77101C3.20947 2.86938 3.17273 2.97888 3.15901 3.09254C3.07205 3.7458 3.95752 4.36438 5.07505 4.47069C7.86946 4.73654 9.98698 2.68136 9.98698 2.68136C9.98698 2.68136 8.3109 0.233785 5.47447 0.0112986Z" fill="#6FBC77"/>
                                    <path d="M11.4478 9.34476C12.081 8.40023 12.1918 7.34235 11.6644 6.96202C11.5512 6.88215 11.4183 6.83616 11.2809 6.82923C11.1732 6.82301 11.0652 6.83329 10.9605 6.85972C10.9592 6.8628 10.9579 6.86639 10.9566 6.86945C10.3537 8.26507 9.20231 9.87441 7.96102 10.8477C7.96025 10.8432 9.38414 9.20554 10.2371 7.37861C10.2631 7.3219 10.9651 5.81107 10.9912 4.57549L10.401 4.4248C10.414 4.96082 10.3499 5.49589 10.2108 6.01291C10.156 5.91295 10.0815 5.82573 9.99197 5.75676C9.48134 5.35324 8.51393 5.82691 7.86499 6.76189C6.24231 9.09984 6.92676 11.9998 6.92676 11.9998C6.92676 11.9998 9.84084 11.7415 11.4478 9.34476Z" fill="#6FBC77"/>
                                    <path d="M0.54425 9.95985C1.02877 10.9921 1.87067 11.619 2.45698 11.3428C2.58135 11.2826 2.68677 11.1881 2.76138 11.07C2.82049 10.978 2.86576 10.8773 2.89568 10.7716C2.89373 10.7689 2.89134 10.7659 2.88941 10.7632C2.00707 9.53233 1.21773 7.70954 1.0128 6.12531C1.01701 6.12689 1.69415 8.20476 2.81727 9.87245C2.85238 9.9238 3.78287 11.2999 4.81785 11.9408L5.24075 11.4943C4.77959 11.2378 4.35779 10.9136 3.98885 10.532C4.101 10.5336 4.21224 10.5113 4.31551 10.4666C4.91309 10.2169 4.99503 9.12462 4.52644 8.08333C3.35472 5.47953 0.552752 4.63477 0.552752 4.63477C0.552752 4.63477 -0.685252 7.34058 0.54425 9.95985Z" fill="#6FBC77"/>
                                </svg>    
                            </span>8,5/10</p>
                    </div>
                </HeaderContainer>
                <TagContainer>
                    <Tag color="#5EA565" background="rgba(94, 165, 101, 0.05)">VEGAN</Tag>
                    <Tag color="#2D9CDB" background="rgba(45, 156, 219, 0.05)">BIO</Tag>
                    <Tag color="#000000" background="#F9F9F9">CIRCUIT COURT</Tag>
                    <Tag color="#F29C4C" background="rgba(242, 156, 76, 0.05)">SANS GLUTEN</Tag>
                </TagContainer>
                <DetailsContainer>
                    <p>Type fiche: <span>Commerce</span></p>
                    <p>Type de commerce: <span>Restaurant</span></p>
                    <p>Adresse: <span>114 boulevard haussman</span></p>
                </DetailsContainer>
                {currentEntityHover ? (
                    null
                    ) : (
                    <svg className="closeIcon" onClick={setCurrentEntity} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.18294 0L8.02275 6.83981L14.5592 0.303317L15.6664 1.41043L9.12986 7.94692L16 14.8171L14.8171 16L7.94692 9.12986L1.42559 15.6512L0.318484 14.5441L6.83981 8.02275L0 1.18294L1.18294 0Z" fill="#6A6A85"/>
                    </svg>
                )}
            </div>
        </Root>
    )
}

export default ModalDescription;