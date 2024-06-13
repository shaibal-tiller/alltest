const DetailsModal = ({ isOpen, closeModal, country }) => {
  return (
    <div className={`modal ${isOpen ? 'modal-open' : 'modal-closed'}`}>
      {isOpen && (
        <div className="modal-content">
          <h2 className="text-2xl font-bold mb-4">
            Details for {country.country}
          </h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th>IP</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {country.details.map((detail, index) => (
                <tr key={index}>
                  <td>{detail.ip}</td>
                  <td>{detail.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={closeModal} className="mt-4">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default DetailsModal