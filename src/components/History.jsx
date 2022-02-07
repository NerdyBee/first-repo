import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  padding: 5rem;
  width: 100%;
  line-height: 2rem;
  background: rgba(83, 83, 83, 0.1);

  h1 {
      color: var(--primary-color);
      margin-bottom: 1rem;
  }
  @media screen and (max-width: 760px) {
    padding: 2rem;
    font-size: .9rem;
  }
`;

const History = () => {
  return (
    <div>
      <Container>
        <h1>About Luxury Hotel</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, illum
          delectus sequi necessitatibus cum laudantium incidunt minima,
          voluptatibus voluptas repellat officia doloremque magnam quis,
          accusamus tenetur, quasi doloribus iusto quia distinctio labore optio
          reprehenderit aperiam suscipit dignissimos aliquid! Odit distinctio
          quam, excepturi repellendus sunt magni adipisci sit architecto placeat
          tempore numquam, ipsam nobis vitae aperiam reprehenderit inventore
          ipsum facilis? Sapiente iure id explicabo. Omnis, architecto quaerat!
          Architecto error ducimus consequuntur, asperiores fugiat nostrum
          veniam eaque aspernatur ab quas aliquam ipsa! Odit expedita voluptate,
          mollitia tenetur eveniet quisquam a veritatis. In, odit. Enim aliquid
          voluptates vitae pariatur facilis beatae odio labore est, voluptatem
          officiis! Maiores, iure molestias aliquam suscipit rem impedit
          veritatis architecto delectus molestiae tempora inventore beatae
          consectetur facere voluptas dolores labore, laboriosam officiis non
          alias minima dolorum fuga corrupti blanditiis. Laudantium consequatur,
          aspernatur beatae dicta atque labore. Molestiae illum, possimus,
          officia sit nihil, cupiditate nesciunt, consequatur nulla deleniti
          veniam modi maxime impedit delectus iste totam earum vel repellendus
          doloribus in quae fuga. Dignissimos, unde eius voluptatem iusto est
          nesciunt quaerat temporibus velit doloribus a id laborum repellendus
          fugit nihil, animi facilis quisquam nemo tempora accusantium
          doloremque libero magnam dolorum veritatis vel aspernatur. Enim
          reiciendis laborum, expedita illum, aliquam eaque!
        </p>
      </Container>
    </div>
  );
};

export default History;
