function Footer({ year, author }) {
  return (
    <footer className="footer">
      <p>
        © {year} — {author}
      </p>
    </footer>
  )
}

export default Footer
