function Footer() {

  const onClick = () => {
    console.log("footer click");
  }

  return (
    <footer onClick={onClick}>
      footer
    </footer>
  );
}

export default Footer;
