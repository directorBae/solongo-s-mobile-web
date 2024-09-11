import styled from "styled-components";

const GridAssign = styled.div`
  display: grid;
  grid-template-rows: minmax(40px, auto) minmax(auto, 300px) minmax(40px, auto);
`;

const BottomTabTemplate = ({ children }: { children: React.ReactNode }) => {
  return <GridAssign>{children}</GridAssign>;
};

export default BottomTabTemplate;
