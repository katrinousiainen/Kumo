import styled from 'styled-components';

export const BackgroundImageContainer = styled.div`
height: 100%
	min-width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px grey;
	margin: 0 7.5px 15px;
	overflow: hidden;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  &:hover {
    cursor: pointer;

    & .card-img-top {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
        opacity: 0.9;
    }
}

&:first-child {
margin-right: 7.5px;
}

&:last-child {
margin-left: 7.5px;
}
`;