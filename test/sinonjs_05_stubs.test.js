const expect = require('chai').expect;
const request = require('request');
const sinon = require('sinon');
const index = require('../app/index');

describe('with Stub: getPhotosByAlbumId', () => {
    before(() => {
        sinon.stub(request, 'get')
            .yields(null, null, JSON.stringify([
                {
                    "albumId": 1,
                    "id": 1,
                    "title": "accusamus beatae ad facilis cum similique qui sunt",
                    "url": "https://via.placeholder.com/600/92c952",
                    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
                },
                {
                    "albumId": 1,
                    "id": 2,
                    "title": "reprehenderit est deserunt velit ipsam",
                    "url": "https://via.placeholder.com/600/771796",
                    "thumbnailUrl": "https://via.placeholder.com/150/771796"
                },
                {
                    "albumId": 1,
                    "id": 3,
                    "title": "officia porro iure quia iusto qui ipsa ut modi",
                    "url": "https://via.placeholder.com/600/24f355",
                    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
                }
            ]));
    });

    after(() => {
        request.get.restore();
    });

    it('should getPhotosByAlbumId', (done) => {
        index.getPhotosByAlbumId(1).then((photos) => {
            expect(photos.length).to.equal(3);
            photos.forEach(photo => {
                expect(photo).to.have.property('id');
                expect(photo).to.have.property('title');
                expect(photo).to.have.property('url');
            });
            done();
        });
    });
});
